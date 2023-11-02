import Dropdown from '../components/Dropdown/Dropdown';
import { useStore } from '../store'

const IconDropdown = () => (
    <span aria-hidden="true">
        <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
        </svg>
    </span>

);

const sideMenu = [
    {
    name: 'Walls',
    items: [
        {
            label: 'Wall',
            model: 'wall'
        }
    ]
    }
]

const Menu = () => {
    const { actions } = useStore();
    const onClickImage = (model: string) => {
        actions.addTile(model);
    }
    return (
        <div className="ui grid w-80">
            <div className="bg-gray-100 p-3 border-gray-500">
                {sideMenu.map((section) => (
                                    <Dropdown name={section.name}>
                                        {section.items.map((item) => (
                                                                <a
                                                                href="#"
                                                                role="menuitem"
                                                                className="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:text-gray-400 dark:hover:text-light hover:text-gray-700"
                                                            >
                                                                <img src={`stone.jpg`} alt="stone" onClick={() => onClickImage(item.model)} height={64} />
                                                            </a>
                                        ))}
                                    </Dropdown>

                ))}

            </div>
        </div>
    )
}

export default Menu
