function pagination(pageData, qtdPerPage) {
    const qtdPost = qtdPerPage
    const pageQtd = Math.ceil(pageData.length / qtdPost)
    const pagination = document.getElementById('pagination')

    if (document.querySelectorAll('.pag-number').length <= 0) {
        for (let i = 1; i <= pageQtd; i++) {
            const pagNumber = document.createElement('button')
            pagNumber.classList.add('pag-number')
            pagNumber.innerHTML = `${i}`
            pagination.appendChild(pagNumber)
        }
    }
}