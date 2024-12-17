export class Formpost{
    constructor(idForm, idText, idParagrafo){
        this.form = document.getElementById(idForm);
        this.text = document.getElementById(idText);
        this.paragrafo = document.getElementById(idParagrafo);
        this.addSubmit();
    }
    
    onSubmit(func){
        this.form.addEventListener('submit', func)
    }

    addSubmit(){
        const handleSubmit = (event) =>{
            event.preventDefault();

            const newPost = document.createElement('p');
            newPost.innerHTML = `
                    <div class="informacoes">
                        <div class="usuario">
                            <div class="mini_perfil">
                                <img src="img/ussuario.jpg" alt="">
                            </div>
                                <p class="nome_usuario">
                                 Usuario
                                </p>
                                <p class="tempo_post2">7 minutos</p>
                        </div>
                        <br>
                    </div>
                    
                    <div class="comentario">
                        <p id="paragrafo">${this.text.value}</p>
                    </div>            
        
            `;
            this.paragrafo.append(newPost);
            this.text.value = '';
        }
        this.onSubmit(handleSubmit);
        
    }

}
const post_form = new Formpost('formPost', 'text', 'paragrafo');