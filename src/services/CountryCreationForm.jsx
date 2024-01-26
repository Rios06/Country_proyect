//FORMULARIO DE CREACION DE PAIS
const CountryCreationForm = () => {
    return (
        <section className="section-input">
            <h1>Create <span>Country</span> </h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Sed rerum sapiente cumque ducimus autem in, quos voluptatem
            </p>
            <section className="container-input">
                <input type="text" placeholder="Code"/>
                <input type="text" placeholder="Name" disabled/>
                <input type="text" placeholder="Capital" disabled/>
                <input type="text" placeholder="Continent" disabled/>
                <input type="text" placeholder="Currency" disabled/>
                <input type="text" placeholder="Languages" disabled/>

            </section>
            <div className="button-create">
            <button>create country</button>
            </div>

        </section>
    )
}

export default CountryCreationForm;