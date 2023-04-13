<template>
    <div>
        <form>
            <label for="contactID">
                <input name="contactID" id="contactID" placeholder="User-token">
                <br>
            </label>
            <label for="NickName">
                <input name="NickName" id="NickName" placeholder="Nickname (optional)">
            </label>
            <button class="btn long-btn">Add user</button>
        </form>
    </div>
</template>

<style lang="scss" scoped>
    #contactID {
        text-align: center;
    }

    #NickName {
        text-align: center;
    }

    form {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        * {
            margin: 8px;
        }
    }
</style>
