export function Login () {
    return (
        <section> 
            <main> 
                <form> 
                    <div>
                        <label htmlFor="email"> E-mail </label>
                        <input type='text' id='email'/>
                    </div>

                    <div>
                        <label htmlFor="password"> Senha </label>
                        <input type='password' id='password'/> 
                    </div>
            
                </form>
            </main>
        </section>
    );  
}