import React from 'react'
import notificationDefinition from './notificationDefinition'
import close from "../../assets/close.svg"
import Notification from './Notification'
import "./Notifications.css"

const tabs = ['all', 'following', 'liked', 'commented']

const createNotificationsCount = (notificationDefinition) => {
    return notificationDefinition.reduce(
        (acc, notification) => {
            acc['all']++;
            acc[notification.notificationType]++;
            return acc;
        }, tabs.reduce((acc, tab) => {
            acc[tab] = 0;
            return acc;
        }, {})
    )
}

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

const Notifications = () => {
    const [notifications, setNotifications] = React.useState(
        notificationDefinition
    )
    const notificationsCount = createNotificationsCount(notifications)
    const [currentTab, setCurrentTab] = React.useState('all')

    return (
        <div className='background'>
            <div className="notifications">
                <div className="notifications__header">
                    <h2>Notifications</h2>
                    <img src={close} alt="x" className='notifications__close' />
                </div>
                <div className="notifications__tabs">
                    {
                        tabs.map(tab =>
                            <div className='tab'>
                                <button key={tab} className={currentTab === tab ? 'active' : ''} onClick={() => setCurrentTab(tab)}>
                                    {capitalizeFirstLetter(tab)}
                                </button>
                                <span className="notification__count">
                                    {notificationsCount[tab]}
                                </span>
                            </div>
                        )
                    }
                </div>
                <div className="notifications__content">
                    {
                        notifications.filter((notification) => {
                            if (currentTab === 'all') {
                                return true
                            } else {
                                return notification.notificationType === currentTab
                            }
                        }).map((notification, index) =>
                            <Notification key={index} notification={notification} />
                        )
                    }
                </div>
                <div className='notifications__footer'>
                    <button className='secondary' onClick={() => {
                        setNotifications(notifications.map(notification => {
                            notification.read = true;
                            return notification
                        }))
                    }}>
                        Mark all as read
                    </button>
                    <button className='primary'>
                        View all notifications
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Notifications