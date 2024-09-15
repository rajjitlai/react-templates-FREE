import React from 'react'
import "./Notification.css"
import avatar from "../../assets/account.png"

const Notification = ({ notification }) => {
    const date = new Date(notification.dateTime);

    return (
        <div className='notification'>
            <div className="notification__avatar">
                <img src={avatar} alt={notification.title} />
                {/* <div className={`'notification__status', {'notification__status--online':notification.user.status === 'online','notification__status--offline':notification.user.status === 'offline','notification__status--pending':notification.user.status === 'pending'`})
                }></div> */}
            </div>
            <div className='notification__content'>
                <h2 className='notification__title'>{notification.title}</h2>
                <time className='notification__date'>
                    {date.getDate() + ' ' + date.getMonth() + ', ' + date.getFullYear()}
                </time>
            </div>
            {
                !notification.read && <div className='notification__read'></div>
            }
        </div>
    )
}

export default Notification