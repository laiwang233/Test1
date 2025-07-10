document.addEventListener('DOMContentLoaded', () => {
    const users = [
        { name: '张三', age: 28, number: 'EMP1001' },
        { name: '李四', age: 35, number: 'EMP1002' },
        { name: '王五', age: 22, number: 'EMP1003' },
        { name: '赵六', age: 41, number: 'EMP1004' },
        { name: '孙七', age: 30, number: 'EMP1005' }
    ];

    const tableBody = document.querySelector('#data-table-body');

    /**
     * 根据数据渲染表格
     * @param {Array<object>} data - 用户数据数组
     */
    const renderTable = (data) =>{
        tableBody.innerHTML = '';

        data.forEach(user =>{
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>
                    ${user.name}
                </td>
                <td>
                    ${user.age}
                </td>
                <td>
                    ${user.number}
                </td>
                <td>
                    <button class="button button--primary edit-button" data-id="${user.number}">编辑</button>
                </td>
            `;

            tableBody.appendChild(row);
        });
    };

    const modal = document.querySelector('.modal');

    /**
     * 打开模态框
     */
    const openModal = () => modal.classList.add('is-visible');

    /**
     * 关闭模态框
     */
    const closeModal = () => modal.classList.remove('is-visible');

    const fillFormWithUserData = (userId) =>{
        const user = users.find(s => s.number === userId);

        if(user){
            const form = document.querySelector('#edit-form');
            form.querySelector('#name-input').value = user.name;
            form.querySelector('#age-input').value = user.age;
            form.querySelector('#number-input').value = user.number;
        }
    };

    if(tableBody){
        tableBody.addEventListener('click', (event) =>{
            if(event.target.matches('.edit-button')){
                const userId = event.target.dataset.id;
                fillFormWithUserData(userId);
                openModal();
            }
        });
    }

    const modalCloseButton = document.querySelector('.modal__close');
    if(modalCloseButton) modalCloseButton.addEventListener('click', closeModal);

    const modalCanCelButton = document.querySelector('[data-action="close"]');
    if(modalCanCelButton) modalCanCelButton.addEventListener('click', closeModal);

    if(modal){
        modal.addEventListener('click', (event) =>{
            event.preventDefault();
            if(event.target === modal) closeModal();
        });
    }

    document.addEventListener('keydown', (event) => {
        if(event.key === 'Escape' && modal.classList.contains('is-visible')) closeModal();
    })

    // --- 初始调用 ---
    renderTable(users);
});

