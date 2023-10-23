<template>
    <div class="main">
        <div class="Teste">
            <div>
                <RouterLink class="link" to="/main/"><button>Estrutura</button></RouterLink> <br>
                <RouterLink class="link" to="/main/dashboard"><button>Dashboard</button></RouterLink> <br>
                <RouterLink class="link" to="/main/secondDashboard"><button>Second Dashboard</button></RouterLink>
            </div>
        </div>

        <div class="View">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Structure-Vue',
    }
</script>

<style scoped>
    .main{
        display: flex;
    }
    .Teste{
        display: flex;
        background-color: black;
        width: 6%;
        height: 100vh;
        justify-content: center;
        align-items: center;
    }

    .Teste div{
        width: 100%;
    }

    .Teste div .link{
        text-decoration: none;
    }

    .Teste div button{
        width: 100%;
        margin-bottom: 5px;
    }

    .View{
        background-color: white;
        margin: auto auto;;
        width: 50%;
        height: 40vh;
    }

</style>