function getmessageTest(){
    return [
        {
            "message_id":"100001",
            "sender": "Alice",
            "avatar": "demo.png",
            "content": "你好，这是一条测试消息。",
            "sent_at": "2024-02-20 10:00:00",
            "is_read": true,
            "content_type": "text"
        },
        {
            "message_id":"100002",
            "sender": "Bob",
            "avatar": "demo.png",
            "content": "这是另一条测试消息，内容较长一点，可以测试消息气泡的自适应宽度。",
            "sent_at": "2024-02-20 10:05:00",
            "is_read": false,
            "content_type": "text"
        },
        {
            "message_id":"100003",
            "sender": "Alice",
            "avatar": "demo.png",
            "content": "这是一张图片。",
            "sent_at": "2024-02-20 10:10:00",
            "is_read": false,
            "content_type": "image",
            "image_url": "image.jpg"
        },
        {
            "message_id":"100004",
            "sender": "Bob",
            "avatar": "demo.png",
            "content": "这是一段多行的文本，用于测试消息内容的多行显示。这是第一行。\n这是第二行。\n这是第三行。",
            "sent_at": "2024-02-20 10:15:00",
            "is_read": false,
            "content_type": "text"
        },
        {
            "message_id":"100005",
            "sender": "Alice",
            "avatar": "demo.png",
            "content": "这是另一条测试消息，内容较长一点，可以测试消息气泡的自适应宽度。这是第二行内容。",
            "sent_at": "2024-02-20 10:20:00",
            "is_read": false,
            "content_type": "text"
        },
        {
            "message_id":"100006",
            "sender": "Bob",
            "avatar": "demo.png",
            "content": "这是一条包含链接的消息，你可以点击 [这里](https://example.com) 查看。",
            "sent_at": "2024-02-20 10:25:00",
            "is_read": false,
            "content_type": "text"
        },
        {
            "message_id":"100007",
            "sender": "Alice",
            "avatar": "demo.png",
            "content": "这是一段较长的文本内容，用于测试消息的换行和显示效果。这是第一行。\n这是第二行。\n这是第三行。\n这是第四行。\n这是第五行。",
            "sent_at": "2024-02-20 10:30:00",
            "is_read": false,
            "content_type": "text"
        },
        {
            "message_id":"100008",
            "sender": "Bob",
            "avatar": "demo.png",
            "content": "这是一条包含表情符号的消息 😊👍。",
            "sent_at": "2024-02-20 10:35:00",
            "is_read": false,
            "content_type": "text"
        }
    ];

}

function getfillcontactsTest(){
    return {
        "friends": [
            {
                "username": "好友1",
                "avatar": "demo.png",
                "link": "https://example.com",
                "unread": 5
            },
            {
                "username": "好友2",
                "avatar": "demo.png",
                "link": "https://example.com",
                "unread": 0
            },
            {
                "username": "好友3",
                "avatar": "demo.png",
                "link": "https://example.com",
                "unread": 2
            }
        ],
        "groups": [
            {
                "groupname": "群组1",
                "avatar": "demo.png",
                "link": "https://example.com",
                "unread": 10
            },
            {
                "groupname": "群组2",
                "avatar": "demo.png",
                "link": "https://example.com",
                "unread": 0
            },
            {
                "groupname": "群组3",
                "avatar": "demo.png",
                "link": "https://example.com",
                "unread": 3
            }
        ]
    };
}
