import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../redux/apiRequest';

import { listContainer, imageUrlDefault } from '../../utils/listContainer';
import InputField from '../shared/input-fields';

import './index.css';

function EditPage(props) {
  const avaUrl = listContainer.avaUrl;

  const { setIsEdit } = props;

  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.user.user.currentUser);

  const [name, setName] = useState(currentUser?.displayName);
  const [age, setAge] = useState(currentUser?.age);
  const [about, setAbout] = useState(currentUser?.about);
  const [theme, setTheme] = useState(currentUser?.theme);

  const [selectedIdx, setSelectedIdx] = useState(0);
  const [url, setUrl] = useState(imageUrlDefault);

  const changeAvatar = (e, idx) => {
    setUrl(e.target.src);
    setSelectedIdx(idx);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setIsEdit(false);
    const updatedUser = {
      displayName: name,
      age: age,
      about: about,
      profilePicture: url,
      theme: theme,
    };
    updateUser(updatedUser, dispatch);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <section className="edit-container">
          <button className="close">SAVE</button>
          <div className="edit-profile">Edit Profile</div>
          <div className="input-container">
            <InputField
              inputType="text"
              value={name}
              setData={setName}
              label="Display name"
            />
            <InputField
              inputType="text"
              value={age}
              setData={setAge}
              label="Age"
            />
            <InputField
              inputType="textarea"
              value={about}
              setData={setAbout}
              label="About"
              classStyle="input-about"
            />
            <label>Profile Picture</label>
            <section className="input-image-container">
              {avaUrl.map((url, idx) => (
                <img
                  onClick={(e) => changeAvatar(e, idx)}
                  className={`${
                    selectedIdx === idx
                      ? `input-image-selected`
                      : `input-image`
                  }`}
                  src={url}
                  alt="profile"
                  key={idx}
                />))
              }
            </section>
            <div className="theme-container">
              <label>Theme</label>
              <input
                className="theme-color"
                type="color"
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
              />
            </div>
          </div>
        </section>
      </form>
    </>
  )
}

export default EditPage;