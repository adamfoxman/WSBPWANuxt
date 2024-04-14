<template>
    <div class="columns is-centered">
        <div class="column is-three-quarters">
            <h1 class="title">Dostawa</h1>
            <table class="table is-bordered is-fullwidth">
                <thead>
                    <tr>
                        <th>Metoda dostawy</th>
                        <th>Koszt</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Paczkomat Inpost</td>
                        <td>10 zł</td>
                    </tr>
                    <tr>
                        <td>Kurier DPD</td>
                        <td>15 zł</td>
                    </tr>
                    <tr>
                        <td>Kurier DHL</td>
                        <td>20 zł</td>
                    </tr>
                    <tr>
                        <td>Pocztex</td>
                        <td>12 zł</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Dostawa',
}
</script>

<style scoped>
.title {
    color: black;
}
</style>