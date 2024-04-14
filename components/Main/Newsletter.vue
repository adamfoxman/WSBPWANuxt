<template>
    <div class="newsletter">
        <h1 class="title">Newsletter</h1>
        <h2 class="subtitle">Dołącz do naszego newslettera i nie przegap żadnej okazji!</h2>
        <div class="field">
            <label class="label">Adres e-mail</label>
            <div class="control">
                <input class="input" type="email" placeholder="jan@kowalski.pl" v-model="email">
            </div>
        </div>
        <div class="field">
            <div class="control">
                <button class="button is-primary" @click="validateEmail">Wyślij</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
        };
    },
    methods: {
        validateEmail() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (emailRegex.test(this.email)) {
                console.log('Dodano email:', this.email);
            } else {
                console.log('Nieprawidłowy email:', this.email);
            }
        },
    },
};
</script>

<style scoped>
.newsletter {
    background-color: #f5f5f5;
    padding: 20px;
    text-align: center;
}

.title {
    font-size: 32px;
    margin-bottom: 10px;
}

.subtitle {
    font-size: 18px;
    margin-bottom: 20px;
}

.input {
    width: 300px;
}

.button {
    width: 100px;
}
</style>