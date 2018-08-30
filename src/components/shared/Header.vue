<template>
    <div>
        <b-navbar toggleable="md" type="dark" variant="info">

            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

            <b-navbar-brand  to="/">Stock App</b-navbar-brand>

            <b-collapse is-nav id="nav_collapse">

                <b-navbar-nav>
                    <b-nav-item to="/"  exact>Home</b-nav-item>
                    <b-nav-item  to="portfolio">Portfolio</b-nav-item>
                    <b-nav-item  to="stocks">Stocks</b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">

                    <b-navbar-nav>
                        <b-nav-item href="#">End Day</b-nav-item>
                    </b-navbar-nav>

                    <b-nav-item-dropdown right>
                        <!-- Using button-content slot -->
                        <template slot="button-content">
                            <em>User</em>
                        </template>
                        <b-dropdown-item href="#">Save Data</b-dropdown-item>
                        <b-dropdown-item href="#">Load Data</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>

            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
</style>
