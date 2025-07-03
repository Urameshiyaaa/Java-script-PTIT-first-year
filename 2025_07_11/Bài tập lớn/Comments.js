let a = localStorage.getItem('comments')
if (a){
    comments = JSON.parse(a)
}
else{
    comments = []
}

function postComment() {
    const cmtInput = document.getElementById('cmtInput')
    const cmtText = cmtInput.value.trim()
    if (cmtText === '') {
        alert('Hãy nhập nội dung bình luận!')
        return
    }

    const newCmt = {
        id: '',
        username: 'Người dùng ẩn danh',
        text: cmtText,
        time: new Date().toLocaleString('vi-VN', { 
            day: '2-digit', 
            month: '2-digit', 
            year: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit' 
        })
    }
    comments.push(newCmt)
    localStorage.setItem('comments', JSON.stringify(comments))
    cmtInput.value = ''
    displayComments()
}

function displayComments() {
    const cmtList = document.getElementById('commentList')
    cmtList.innerHTML = ''

    comments.forEach( cmt => {
        const createCmt = document.createElement('div')
        createCmt.className = 'post'
        createCmt.style.marginTop = '10px'
        createCmt.innerHTML = `
            <div class="post-header">
                <img src="https://via.placeholder.com/40" alt="Avatar" class="avatar">
                <span class="username">${cmt.username}</span>
                <span class="time">${cmt.time}</span>
                <button class="delete-bt" onclick="deleteComment(${cmt.id})">Xóa</button>
            </div>
            <div class="post-content">${cmt.text}</div>`
        cmtList.appendChild(createCmt)
    })
}
document.addEventListener('DOMContentLoaded', displayComments)

function deleteComment(id) {
    comments = comments.filter( function(comment) { 
        return comment.id !== id
    })
    localStorage.setItem('comments', JSON.stringify(comments))
    displayComments()
}













