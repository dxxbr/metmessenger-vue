<template>
    <div>
        <form>
            <h2>Add User</h2>
            <label for="contactID">
                <input name="contactID" id="contactID" placeholder="User-token" required>
                <br>
            </label>
            <label for="NickName">
                <input name="NickName" id="NickName" placeholder="Nickname (optional)">
            </label>
            <button class="btn long-btn">Add User</button>
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
            margin: 4px;
        }
    }
</style>
