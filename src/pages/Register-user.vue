<!-- * Autor: Saúl García Medina -->
<!-- * Esta es la página de registro, se encaraga de procesar el -->
<!-- * registro de usuarios en la aplicación -->

<template>
  <div class="col-md-12">
    <div class="card card-container">
      <div id="card-content">
        <div id="card-title">
          <h2>REGISTRO</h2>
          <div class="underline-title"></div>
        </div>
        <Form @submit="handleRegister" :validation-schema="schema" class="form">
          <div v-if="!successful">
            <div class="form-group">
              <label for="username">Usuario</label>
              <Field name="username" type="text" class="form-control inputs" />
              <div class="form-border"></div>
              <ErrorMessage name="username" class="error-feedback" />
            </div>
            <div class="form-group">
              <label for="password">Contraseña</label>
              <Field name="password" type="password" class="form-control inputs" />
              <div class="form-border"></div>
              <ErrorMessage name="password" class="error-feedback" />
            </div>

            <div class="form-group" id="btn-login-div">
              <button id="submit-btn" class="btn btn-primary btn-block" :disabled="loading">
                <span
                  v-show="loading"
                  class="spinner-border spinner-border-sm"
                ></span>
                Registrarse
              </button>
            </div>
          </div>
        </Form>

        <div
          v-if="message"
          class="alert"
          :class="successful ? 'alert-success' : 'alert-danger'"
        >
          {{ message }}
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
  name: "Register-user",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      username: yup
        .string()
        .required("El usuario es requerido")
        .min(3, "El nombre de usuario debe tener al menos 3 caracteres")
        .max(20, "El nombre de usuario debe ser de máximo 20 caracteres"),
      password: yup
        .string()
        .required("La contraseña es requerida")
        .min(6, "La contraseña debe tener al menos 6 caracteres")
        .max(40, "La contraseña puede ser de máximo 20 caracteres"),
    });

    return {
      successful: false,
      loading: false,
      message: "",
      schema,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },
  methods: {
    handleRegister(user) {
      this.message = "";
      this.successful = false;
      this.loading = true;

      this.$store.dispatch("auth/register", user).then(
        (data) => {
          this.message = data.message;
          this.successful = true;
          this.loading = false;
        },
        (error) => {
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          this.successful = false;
          this.loading = false;
        }
      );
    },
  },
};
</script>
  
<style scoped>
a {
  text-decoration: none;
}
label {
  font-family: "Raleway", sans-serif;
  font-size: 11pt;
}
#forgot-pass {
  color: #2dbd6e;
  font-family: "Raleway", sans-serif;
  font-size: 10pt;
  margin-top: 3px;
  text-align: right;
}

.card-container {
  background: #fff;
  border-radius: 8px;
  box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.65);
  height: 410px;
  margin: 0px auto;
  margin-top: 200px;
  width: 30%;
}
#card-content {
  padding: 30px 60px 30px 60px;
}
#card-title {
  font-family: "Raleway Thin", sans-serif;
  letter-spacing: 4px;
  padding-bottom: 23px;
  padding-top: 13px;
  text-align: center;
}
#signup {
  color: #2dbd6e;
  font-family: "Raleway", sans-serif;
  font-size: 10pt;
  margin-top: 16px;
  text-align: center;
}

#btn-login-div {
  margin: 0px auto;
}

#submit-btn {
  background: -webkit-linear-gradient(right, #a6f77b, #2dbd6e);
  border: none;
  border-radius: 21px;
  box-shadow: 0px 1px 8px #24c64f;
  cursor: pointer;
  color: white;
  font-family: "Raleway SemiBold", sans-serif;
  height: 42.3px;
  margin: 0px auto;
  margin-top: 50px;
  transition: 0.25s;
  width: 153px;
}
#submit-btn:hover {
  box-shadow: 0px 1px 18px #24c64f;
}
.form {
  align-items: left;
  display: flex;
  flex-direction: column;
}
.form-border {
  background: -webkit-linear-gradient(right, #a6f77b, #2ec06f);
  height: 1px;
  width: 100%;
}
.form-content {
  background: #fbfbfb;
  border: none;
  outline: none;
  padding-top: 14px;
}

.inputs {
  border: none;
  
}
.underline-title {
  background: -webkit-linear-gradient(right, #a6f77b, #2ec06f);
  height: 2px;
  margin: -1.1rem auto 0 auto;
  margin-top: 1.5px;
  width: 75%;
}
</style>