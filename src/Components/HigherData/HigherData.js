import React from "react";
import "./HigherData.scss";
class HigherData extends React.Component {
  //   editPost=()=>{

  //  }
  displayPost = (eachPost) => {
    const { updateDetails } = this.props;

    updateDetails(eachPost);
  };
  render() {
    const { posts } = this.props;

    return (
      <div className="higherData">
        {posts && posts.length > 0 ? (
          <table className="table table-dark">
            <thead>
              <tr>
                <th>Id</th>
                <th>userId</th>
                <th>Title</th>
                <th>Display</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((eachPost) => (
                <tr key={eachPost.id}>
                  <td>{eachPost.id}</td>
                  <td>{eachPost.userId}</td>
                  <td>{eachPost.title}</td>
                  <td>
                    <button onClick={() => this.displayPost(eachPost)}>
                      Click
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No posts available</p>
        )}
      </div>
    );
  }
}

export default HigherData;
