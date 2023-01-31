import { HttpClient } from '@angular/common/http';
import { Component, ɵɵsetComponentScope } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  image=FormControl;
   archivo=new FormData();
  previsualizacion:any =null;
  title = 'learnuploadimages';
  /**
   *
   */
  imagenBase64:string='';
  constructor(private http:HttpClient) {
    
  }
  changeImage(event:any){
    const activoSeleccionado=event.target.files[0]
    this.previsualizacion=event.target.files[0]
    this.archivo.append("image",this.previsualizacion,this.previsualizacion.name)

    const render= new FileReader();
    render.readAsDataURL(activoSeleccionado);
    render.onload=()=>{
      this.imagenBase64=render.result as string;
      console.log(this.imagenBase64)
      console.log(this.archivo)
      console.log('data para enviar al servidor')
      console.log("image",this.previsualizacion,this.previsualizacion.name)
    }
  }
  // guardarImagen(){
  //  this.http.post("./assets/images/roles/",this.imagenBase64).subscribe(res=>console.log(res))
  // }
}
