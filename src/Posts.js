import React from 'react';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className='list-group mb-4'>
      <table>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>company</th>
          <th>job</th>
          <th>city</th>
          <th>phone</th>
          <th>Fav movie</th>
        </tr>

      {posts.map(post => (
        // <li key={post.id} className='list-group-item'>
        <tr key={post.id}>
          <td>{post.id}</td>
          <td>{post.name}</td>
          <td>{post.email}</td>
          <td>{post.company}</td>
          <td>{post.job}</td>
          <td>{post.city}</td>
          <td>{post.phone}</td>
          <td>{post["Fav Movie"]}</td>
      </tr>
      
        // </li>
      ))}
      </table>
    </ul>
  );
};

export default Posts;
