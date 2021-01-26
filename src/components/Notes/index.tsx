import React from 'react';
import { useSelector } from 'react-redux';
import { notesState } from '../../reducers/notes';

// components
import Note from '../Note';

// assets
import SearchIcon from '../../svg/MagnifiyingGlass';

const Index: React.FC = () => {
    const notes = useSelector(notesState);

    return (
        <div className="text-center xl:col-span-3 col-span-3 sm:hidden hidden xl:flex flex flex-col items-center border-theme h-screen">
            <div className="p-8 w-full">
                <div className="flex items-center rounded-3xl  rounded-full relative ">
                    <input
                        className="focus:outline-none  app-input  w-full rounded-full py-3 px-6 "
                        id="search"
                        type="text"
                        placeholder="Search"
                    />

                    <button type="submit" className="absolute right-0 top-0 mt-4 mr-4 w-4 h-4 focus:border-0">
                        <SearchIcon className="app-svg " />
                    </button>
                </div>
            </div>
            {notes.length > 0 ? notes.map((note) => <Note note={note} />) : <p>no notes yet</p>}
        </div>
    );
};

export default Index;
