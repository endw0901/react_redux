import { Component } from 'react';

// classはthis.state, this.propsが必要

interface User {
  name: string;
  age: number;
}

interface UserSearchProps {
  // Userに共通化
  // users: {
  //   name: string;
  //   age: number;

  // }[]
  users: User[];
}

interface UserSearchState {
  name: string;
  // Userに共通化
  // user: { name: string; age: number} | undefined;
  user: User | undefined;
}

class UserSearch extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: '',
    user: undefined,
  };

  onClick = () => {
    // オブジェクト配列の検索
    // useStateに単体オブジェクトを格納 typescript定義(undefined)
    const foundUser = this.props.users.find((user) => {
      return user.name === this.state.name;
    });

    this.setState({ user: foundUser });
  };

  render() {
    // destructuringすることで、render内でthis.state.userでなくuserで参照可
    const { name, user } = this.state;

    return (
      <div>
        <h3>User Search</h3>
        <input
          value={name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={this.onClick}>Find User</button>
        <div>
          {/*ifexist: undefinedを回避するための記法 */}
          {user && user.name}
          {user && user.age}
        </div>
      </div>
    );
  }
}

export default UserSearch;
