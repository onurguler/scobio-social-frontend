import React from 'react';
import { Card, Button } from 'react-bootstrap';
import '../../css/postCard.css';

const PostCard = () => {
  return (
    <div class="cardbox shadow-lg bg-white">
      <div class="cardbox-heading">
        <div class="dropdown float-right">
          <button
            class="btn btn-flat btn-flat-icon"
            type="button"
            data-toggle="dropdown"
            aria-expanded="false">
            <em class="fa fa-ellipsis-h"></em>
          </button>
          <div
            class="dropdown-menu dropdown-scale dropdown-menu-right"
            role="menu"
            style={{
              position: 'absolute',
              transform: 'translate3d(-136px, 28px, 0px)',
              top: '0px',
              left: '0px',
              willChange: 'transform'
            }}>
            <a class="dropdown-item" href="#">
              Hide post
            </a>
            <a class="dropdown-item" href="#">
              Stop following
            </a>
            <a class="dropdown-item" href="#">
              Report
            </a>
          </div>
        </div>
        <div class="media m-0">
          <div class="d-flex mr-3">
            <a href="">
              <img
                class="img-fluid rounded-circle"
                src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/4.jpg"
                alt="User"
              />
            </a>
          </div>
          <div class="media-body">
            <p class="m-0">Benjamin Robinson</p>
            <small>
              <span>
                <i class="icon ion-md-pin"></i> Nairobi, Kenya
              </span>
            </small>
            <small>
              <span>
                <i class="icon ion-md-time"></i> 10 hours ago
              </span>
            </small>
          </div>
        </div>
      </div>

      <div class="cardbox-item">
        <img
          class="img-fluid"
          src="https://images.unsplash.com/photo-1562887194-f0bca025726c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          alt="Image"
        />
      </div>
      <div class="cardbox-base">
        <ul class="float-right">
          <li>
            <a>
              <i class="fa fa-comments"></i>
            </a>
          </li>
          <li>
            <a>
              <em class="mr-5">12</em>
            </a>
          </li>
          <li>
            <a>
              <i class="fa fa-share-alt"></i>
            </a>
          </li>
          <li>
            <a>
              <em class="mr-3">03</em>
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a>
              <i class="fa fa-thumbs-up"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/3.jpeg"
                class="img-fluid rounded-circle"
                alt="User"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/1.jpg"
                class="img-fluid rounded-circle"
                alt="User"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/5.jpg"
                class="img-fluid rounded-circle"
                alt="User"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/2.jpg"
                class="img-fluid rounded-circle"
                alt="User"
              />
            </a>
          </li>
          <li>
            <a>
              <span>242 Likes</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="cardbox-comments">
        <span class="comment-avatar float-left">
          <a href="">
            <img
              class="rounded-circle"
              src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/6.jpg"
              alt="..."
            />
          </a>
        </span>
        <div class="search">
          <input placeholder="Write a comment" type="text" />
          <button>
            <i class="fa fa-camera"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;