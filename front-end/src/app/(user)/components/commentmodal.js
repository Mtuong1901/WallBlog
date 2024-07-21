import React from "react";


export default function CommentModal({ show, onClose }) {
  if (!show) return null; 

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="m-header">
            <div className="m-tool">
                <select>
                    <option value="all">All comment</option>
                    <option value="likes">Popular</option>

                </select>
            </div>
            <button onClick={onClose} className="close-button">&times;</button>
        </div>
        <div className="m-body">
            <div className="comment-lists">
                <div className="c-info">
                <img src="https://i.pinimg.com/236x/c9/03/8f/c9038ffb9fec4de75d3f8db2f77d0d00.jpg"></img>
                <h3>Users name</h3>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum mattis lacus. Aenean eleifend velit eget tellus bibendum, in fermentum metus imperdiet. Sed euismod tellus id mauris scelerisque, non consequat neque volutpat. Donec et arcu non nulla tristique pretium. Donec vel arcu nunc. Donec vel arcu nunc. Donec vel arcu nunc. Donec vel arcu nunc
                </p>
            </div>
        </div>
      </div>
    </div>
  );
}
