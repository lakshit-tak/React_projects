function FilterBar({search, setSearch, filterCategory, setFilterCategory}) {

    return (

        <div className="filter">

                    <input className="input" type="text" placeholder="Search expense..." value={search} onChange={(e) => setSearch(e.target.value)} />

                    <select

                        value={filterCategory}
                        onChange={(e) => setFilterCategory(e.target.value)}
                    >
                        <option value="All" >All</option>
                        <option value="Food" >Food</option>
                        <option value="Travel" >Travel</option>
                        <option value="Shopping" >Shopping</option>
                        <option value="Entertainment" >Entertainment</option>
                        <option value="Other" >Other</option>

                    </select>

                </div>

    );
}

export default FilterBar;