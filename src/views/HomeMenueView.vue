<template>
    <div>
        <form>
            <label for="search">
                <input type="text" id="search" name="Search" placeholder="Suche">
                <button>Search</button>
            </label>
        </form>
        <router-link id="add-btn" class="btn circle-btn" to="/add">+</router-link>
    </div>
</template>
