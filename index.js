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

    // --- 初始调用 ---
    renderTable(users);
});

