//添加消息
document.addEventListener("DOMContentLoaded", () => {
    // 获取消息容器
    const chatMessages = document.getElementById("chat-messages");

    // 模拟从后端获取消息数据的函数
    const fetchMessages = () => {
        // 模拟的消息数据
        const messages = getmessageTest();

        const currentUser = getCookieValue('username');

        // 将消息填充到聊天消息容器中
        messages.forEach(message => {
            const messageElement = document.createElement("div");
            messageElement.classList.add("message");

            // 设置消息元素的消息 ID
            messageElement.dataset.messageId = message.message_id;

            // 检查消息的发送者是否是当前用户
            if (message.sender === currentUser) {
                messageElement.classList.add("sent-by-me"); // 添加一个类来表示消息是由当前用户发送的
            }

            let contentHTML = '';
            if (message.content_type === "image") {

                contentHTML = `<img src="${message.image_url}" alt="Image">`;
            } else {
                const messageContent = replaceLinks(message.content);
                contentHTML = `<p>${messageContent}</p>`;
            }

            messageElement.innerHTML = `
                <div class="message-info">
                    <div class="avatar">
                        <img src="${message.avatar}" alt="Avatar">
                    </div>
                    <div class="message-content">
                        <div class="sender">${message.sender}</div>
                        <div class="bubble">
                            ${contentHTML}
                        </div>
                        <div class="meta">
                            <div class="sent-at">${message.sent_at}</div>
                            <!-- 根据已读状态添加不同的类名 -->
                            <div class="read-status ${message.is_read ? 'read' : 'unread'}">${message.is_read ? "已读" : "未读"}</div>
                        </div>
                    </div>
                </div>
            `;

            chatMessages.appendChild(messageElement);
        });
    };

    // 调用 fetchMessages 函数，填充消息
    fetchMessages();
    // 直接调用 observeMessageVisibility 函数，将未读消息标记为已读
    observeMessageVisibility();
});


// 添加一个函数，用于将消息标记为已读
function markMessageAsRead(messageId) {
    console.log(`[${new Date().toLocaleString()}] 将消息 ${messageId} 标记为已读`);

    // 延迟1秒后更改显示已读状态
    setTimeout(() => {
        const messageElement = document.querySelector(`.message[data-message-id="${messageId}"]`);
        if (messageElement) {
            const readStatusElement = messageElement.querySelector('.read-status');
            if (readStatusElement && !readStatusElement.classList.contains('read')) {
                readStatusElement.textContent = '已读';
                readStatusElement.classList.remove('unread');
                readStatusElement.classList.add('read');
            }
        }
    }, 1000);
}

// 使用 Intersection Observer API 监听消息元素的完全可见性
function observeMessageVisibility() {
    const messages = document.querySelectorAll('.message'); // 获取所有消息元素
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio === 1) { // 如果消息元素完全进入了视口
                // 获取消息ID
                const messageId = entry.target.dataset.messageId;
                // 将消息标记为已读
                markMessageAsRead(messageId);
                // 停止观察已经完全进入视口的消息元素，避免重复处理
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 1
    }); // 当消息元素完全进入视口时触发

    // 将所有未读消息元素添加到观察列表中
    messages.forEach(message => {
        const readStatusElement = message.querySelector('.read-status');
        if (readStatusElement && !readStatusElement.classList.contains('read')) {
            observer.observe(message);
        }
    });
}

//替换超链接
function replaceLinks(messageContent) {
    // 使用正则表达式匹配消息中的链接
    const linkRegex = /(\[([^\]]+)\]\(([^)]+)\))/g;
    // 将链接替换为超链接
    return messageContent.replace(linkRegex, '<a href="$3" target="_blank">$2</a>');
}


