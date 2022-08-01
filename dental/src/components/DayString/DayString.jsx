import React from 'react';

export const DayString = ({date}) => {
    const days = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'
    ];
    const months = [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь'
    ];
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDay();

    return (
        <div>
            { `${days[day]} ${date.getDate()}, ${months[month]} ${year}`  }
        </div>
    );
}

 