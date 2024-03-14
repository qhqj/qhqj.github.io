
const whitelist = [
    "https://example.com",
    "https://google.com",
    "https://bing.com"
];

function handleLinkClick(event) {
    const link = event.target.href;
    if (!whitelist.includes(link)) {
        event.preventDefault();
        const confirmation = confirm("您即将访问的链接不在白名单上，是否继续访问？");
        if (confirmation) {
            window.location.href = link;
        }
    }
}
