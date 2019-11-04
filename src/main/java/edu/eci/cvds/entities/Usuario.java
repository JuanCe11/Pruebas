package edu.eci.cvds.entities;
import java.io.Serializable;

public class Usuario implements Serializable{

    private String nombre;
    private String apellido;
    private String clave;
    private String tipo;
    private String correo;


    public Usuario() {
    }

    public Usuario(String nombre, String apellido, String clave, String tipo, String correo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.clave = clave;
        this.tipo = tipo;
        this.correo = correo;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getClave() {
        return clave;
    }

    public void setClave(String clave) {
        this.clave = clave;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    @Override
    public String toString() {
        return "Estudiante{nombre=" + nombre + " " + apellido + ", tipo=\n\t" + tipo + '}';
    }
}