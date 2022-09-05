import { useState } from "react";

export const DropdownList = ({usedData, defaultText, inputName, setVisit}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    
    return (
        <>  
            <input className="dropdown__input" type="hidden" name={inputName} defaultValue={inputValue} />
            <div className="dropdown__wrapper">
                <div id={inputName} className={`dropdown__box dropdown__box-patient ${isOpen ? 'dropdown__box-open' : '' }`}  onClick={() => setIsOpen(p => !p)} >{inputValue ? JSON.parse(inputValue).name : defaultText}</div>
                {isOpen && <ul className="dropdown__list list">
                    {
                        usedData && usedData.map(item => {
                            return <li onClick={() => setInputValue(p => p = JSON.stringify(item), setIsOpen(p => !p), setVisit ? setVisit(p => p = item.visitCount) : false) } key={item.id}><span>#{item.id }</span> {item.name}</li>
                        })
                    }
                </ul>}
            </div>
        </>
    );
}

