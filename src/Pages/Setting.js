import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import "./Setting.css";

function Setting() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users", error);
      });
  }, []);

  const fetchPosts = (userId) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
      .then((response) => {
        setPosts(response.data);
        setAlbums([]);
      })
      .catch((error) => {
        console.error("Error fetching posts", error);
      });
  };

  const fetchAlbums = (userId) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${userId}/albums`)
      .then((response) => {
        setAlbums(response.data);
        setPosts([]);
      })
      .catch((error) => {
        console.error("Error fetching albums", error);
      });
  };

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setPosts([]);
    setAlbums([]);
  };

  return (
    <div className="settings-container">
      <h2 className="mb-2 mt-3">Settings Page - User Details</h2>
      <hr />
      <div className="user-cards mt-4">
        {users.map((user) => (
          <div
            className="user-card"
            key={user.id}
            onClick={() => handleUserClick(user)}
          >
            <h3 className=" mb-3">{user.name}</h3>
            <hr />
            <p className=" fs-5">Username: {user.username}</p>
            <p className="email_font">Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Company: {user.company.name}</p>
          </div>
        ))}
      </div>

      {selectedUser && (
        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Header closeButton className="custom-modal-header">
            <Modal.Title className="custom-title">
              Details for {selectedUser.name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="custom-modal-body">
            <div className="user-details">
              <p>
                <strong>Username:</strong> {selectedUser.username}
              </p>
              <p>
                <strong>Email:</strong> {selectedUser.email}
              </p>
              <p>
                <strong>Phone:</strong> {selectedUser.phone}
              </p>
              <p>
                <strong>Company:</strong> {selectedUser.company.name}
              </p>
              <p>
                <strong>Latitude:</strong> {selectedUser.address.geo.lat}
              </p>
              <p>
                <strong>Longitude:</strong> {selectedUser.address.geo.lng}
              </p>
            </div>

            <div className="actions">
              <Button
                variant="primary"
                onClick={() => fetchPosts(selectedUser.id)}
              >
                See Posts
              </Button>
              <Button
                variant="secondary"
                onClick={() => fetchAlbums(selectedUser.id)}
              >
                See Albums
              </Button>
            </div>

            {/*posts and albums */}
            <div className="posts-albums">
              {posts.length > 0 && (
                <div className="post-section">
                  <h4>Posts</h4>
                  {posts.map((post) => (
                    <div key={post.id} className="post-card">
                      <h5>{post.title}</h5>
                      <p>{post.body}</p>
                    </div>
                  ))}
                </div>
              )}

              {albums.length > 0 && (
                <div className="album-section">
                  <h4>Albums</h4>
                  {albums.map((album) => (
                    <div key={album.id} className="album-card">
                      <h5>{album.title}</h5>
                    </div>
                  ))}
                </div>
              )}
            </div>


          </Modal.Body>
          <Modal.Footer className="-custom-modalfooter mt-0 p-1">
            <Button variant="danger" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}

      
    </div>
  );
}

export default Setting;
