import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsisH,
  faThumbsUp as faThumbsUpSolid,
  faThumbsDown as faThumbsDownSolid,
  faBookmark as faBookmarkSolid,
  faShare
} from '@fortawesome/free-solid-svg-icons';
import {
  faThumbsUp,
  faThumbsDown,
  faBookmark
} from '@fortawesome/free-regular-svg-icons';
import LikesModal from '../post/LikesModal';

const ProfilePost = () => {
  const [showLikesModal, setShowLikesModal] = useState(false);

  return (
    <div className="mt-4 border rounded-lg px-4 py-2 bg-white">
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex">
          <img
            className="rounded-circle fit-image"
            src="https://scontent-otp1-1.xx.fbcdn.net/v/t1.0-9/p960x960/65123467_10219910636463233_5371741452810321920_o.jpg?_nc_cat=102&_nc_oc=AQllQE9F2oHnz03qbVXp8zJ2yRunR6djtQEc5PDdaZqjBgLbED-_WZqdI-tfvCMpPc4&_nc_ht=scontent-otp1-1.xx&oh=360ed3d04eab2e7462dd54d33479b6e0&oe=5E5343CC"
            width="50"
            height="50"
            alt=""
          />
          <div className="ml-3">
            <div className="font-weight-bold">Ege Çakmak</div>
            <div>
              <small className="text-secondary">Nov 15</small>
            </div>
          </div>
        </div>

        <div class="dropdown">
          <button
            class="btn btn-link text-secondary text-decoration-none dropdown"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false">
            <FontAwesomeIcon icon={faEllipsisH} />
          </button>
          <div
            class="dropdown-menu dropdown-menu-right"
            aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#!">
              Bookmark post
            </a>
            <a class="dropdown-item" href="#!">
              Hide post
            </a>
            <a class="dropdown-item" href="#!">
              Stop following
            </a>
            <a class="dropdown-item" href="#!">
              Report
            </a>
          </div>
        </div>
      </div>
      <img
        className="img-fluid mt-2 fit-image"
        src="https://images.unsplash.com/photo-1574192773018-be32f27632d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        alt=""
        style={{ width: '100%', height: '200px' }}
      />

      <p className="lead font-weight-bold truncate-2-lines mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, amet!
      </p>
      <small className="truncate-3-lines">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
        aperiam eius voluptatem minima atque ratione rem. Aliquid ipsa tempore
        aspernatur quia totam sequi nesciunt, amet vitae, qui nam eaque soluta
        autem aliquam architecto iusto, quos assumenda porro? Ex officiis, totam
        doloremque suscipit neque, fugiat optio doloribus, sint aliquam delectus
        id.
      </small>

      <div className="d-flex mt-4 border-top py-2 justify-content-between">
        <div>
          <a className="text-decoration-none text-secondary" href="#!">
            <FontAwesomeIcon icon={faThumbsUp} />
          </a>
          <a className="text-decoration-none text-secondary" href="#!">
            <small className="ml-2" onClick={() => setShowLikesModal(true)}>
              242
            </small>
          </a>

          <a className="text-decoration-none text-secondary ml-4" href="#!">
            <FontAwesomeIcon className="align-middle" icon={faThumbsDown} />
          </a>
          <a className="text-decoration-none text-secondary" href="#!">
            <small className="ml-2">13</small>
          </a>
        </div>

        <div>
          <a className="text-decoration-none text-secondary" href="#!">
            <FontAwesomeIcon className="align-middle" icon={faBookmark} />
          </a>
          <a className="text-decoration-none text-secondary ml-4" href="#!">
            <FontAwesomeIcon className="align-middle" icon={faShare} />
          </a>
        </div>
      </div>
      <LikesModal
        show={showLikesModal}
        onHide={() => setShowLikesModal(false)}
      />
    </div>
  );
};

export default ProfilePost;
