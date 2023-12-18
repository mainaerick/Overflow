import React from 'react'

type Props = {}

const RoomForm = (props: Props) => {
  return (
    <main className="create-room layout">
  <div className="container">
    <div className="layout__box">
      <div className="layout__boxHeader">
        <div className="layout__boxTitle">
          <a href="{{request.META.HTTP_REFERER}}">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
              <title>arrow-left</title>
              <path
                d="M13.723 2.286l-13.723 13.714 13.719 13.714 1.616-1.611-10.96-10.96h27.625v-2.286h-27.625l10.965-10.965-1.616-1.607z">
              </path>
            </svg>
          </a>
          <h3>Create/Update Study Room</h3>
        </div>
      </div>
      <div className="layout__body">
        <form className="form" action="" method="POST">
          {/* {% csrf_token %} */}

         

           <div className="form__group">
            <label htmlFor="room_topic">Topic</label>
            <input required type="text" name="topic" id="room_topic" list="topic-list" />
            <datalist id="topic-list">
              <select id="room_topic">
                <option value="">Select your topic</option>
                <option value="Python">Python</option>
                <option value="Django">Django</option>
              </select>
            </datalist>

          </div>


          <div className="form__action">
            <a className="btn btn--dark" href="{{request.META.HTTP_REFERER}}">Cancel</a>
            <button className="btn btn--main" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</main>
  )
}

export default RoomForm