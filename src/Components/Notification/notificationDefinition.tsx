import React from 'react'
import avatar from "../../assets/account.png"

const notificationDefinition = () => [
    {
        user: {
            name: '"Joh Doe"',
            avatar: { avatar },
            status: 'online'
        },
        title: <>
            <strong>John Doe</strong> started following you!
        </>,
        dateTime: '2024-09-15T10:00:00Z',
        notificationType: 'following',
        read: false
    },
    {
        user: {
            name: 'Joh Daryl',
            avatar: { avatar },
            status: 'pending'
        },
        title: <>
            <strong>John Daryl</strong> liked your post
        </>,
        dateTime: '2024-09-15T11:00:00Z',
        notificationType: 'liked',
        read: false
    }
]

export default notificationDefinition