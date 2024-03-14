function fillData() {
    const data = getfillcontactsTest();
    const friendsList = document.querySelector('.contacts');
    const groupsList = document.querySelector('.groups');

    // 填充好友列表
    data.friends.forEach(friend => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <!-- 好友列表项 -->
            <div class="list-item">
                <a href="${friend.link}" class="friend-link">
                    <div class="avatar">
                        <img src="${friend.avatar}" alt="${friend.username}">
                    </div>
                    <div class="info">
                        <h4>${friend.username}</h4>
                       <span class="${friend.unread > 0 ? 'unread-message' : ''}">
                            ${friend.unread > 0 ? `未读消息: ${friend.unread}` : '暂无未读消息'}
                       </span>
                    </div>
                </a>
            </div>
        `;
        friendsList.appendChild(listItem);
    });

    // 填充群组列表
    data.groups.forEach(group => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <!-- 群组列表项 -->
            <div class="list-item">
                <a href="${group.link}" class="group-link">
                    <div class="avatar">
                        <img src="${group.avatar}" alt="${group.groupname}">
                    </div>
                    <div class="info">
                        <h4>${group.groupname}</h4>
                        <span class="${group.unread > 0 ? 'unread-message' : ''}">
                            ${group.unread > 0 ? `未读消息: ${group.unread}` : '暂无未读消息'}
                        </span>
                    </div>
                </a>
            </div>
        `;
        groupsList.appendChild(listItem);
    });
}

// 调用函数填充数据
fillData();