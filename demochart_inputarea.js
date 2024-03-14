//控制文本区域自动换行的JavaScript代码。


// 获取文本输入框元素
const textarea = document.querySelector('.input-container textarea');

// 计算文本框的初始高度（包括 padding）
const computedStyle = window.getComputedStyle(textarea);
const paddingTop = parseInt(computedStyle.getPropertyValue('padding-top'), 10);
const paddingBottom = parseInt(computedStyle.getPropertyValue('padding-bottom'), 10);
const heightOffset = paddingTop + paddingBottom;

// 设置文本框的初始高度
textarea.style.height = 'auto';
textarea.style.height = (textarea.scrollHeight - heightOffset) + 'px';

// 监听输入事件
textarea.addEventListener('input', function () {
    // 将文本框的高度设置为内容的高度
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight - heightOffset) + 'px';
});

// 监听滚动事件
textarea.addEventListener('scroll', function (event) {
    // 如果文本框滚动到底部，则阻止冒泡以防止滚动传播到父元素
    if (this.scrollHeight - this.scrollTop === this.clientHeight) {
        this.scrollTop = this.scrollHeight - this.clientHeight;
        event.stopPropagation();
    }
});
