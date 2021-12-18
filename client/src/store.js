import { writable } from 'svelte/store';
import gqlFetch from './utils/gqlFetch';

const query = `query{
  todos{
    uid
    done
    content
  }
}`;

const query2 = `mutation($uid: String){
  removeTodo(uid: $uid){
    content,
  }
}`;

const query3 = `mutation($content: String){
  addTodo(content: $content){
    content
  }
}`;

const createList = () => {
  const { subscribe, set, update } = writable([]);
  const getFetch = async () => {
    const response = await gqlFetch({ query });
    set(response.data.data.todos);
  };

  getFetch();
  return {
    subscribe,
    set,
    update,
    refresh() { getFetch(); },
    add({ content }) {
      gqlFetch({
        query: query3,
        variables: { content },
        afterFetch: () => this.refresh(),
      });
    },
    remove({ uid }) {
      gqlFetch({
        query: query2,
        variables: { uid },
        afterFetch: () => update((items) => items.filter((item) => item.uid !== uid)),
      });
    },
  };
};

export default createList();
