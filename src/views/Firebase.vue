<template>
    <div class="padding20">
        <FirebaseV9 />
        <InstallV9 />
        <CollectionsV9 />
        <AddDocV9 />
        <DeletingV9 />
        <UpdateDocV9 />
        <SignupSigninLogoutV9 />
        <AutoV9 />
        <Header />
        <Install />
        <Collections />
        <SingelDoc />
        <Deleting />
        <AddDoc />
        <Order />
        <LiveDatabase />
    </div>
</template>

<script>
export default {
    components: {
        Header: () =>
            import(
                /* webpackChunkName: "Header" */ "../components/firebase/Header.vue"
            ),
        Install: () =>
            import(
                /* webpackChunkName: "Install" */ "../components/firebase/Install.vue"
            ),
        Collections: () =>
            import(
                /* webpackChunkName: "Collections" */ "../components/firebase/Collections.vue"
            ),
        SingelDoc: () =>
            import(
                /* webpackChunkName: "SingelDoc" */ "../components/firebase/SingelDoc.vue"
            ),
        Deleting: () =>
            import(
                /* webpackChunkName: "Deleting" */ "../components/firebase/Deleting.vue"
            ),
        AddDoc: () =>
            import(
                /* webpackChunkName: "AddDoc" */ "../components/firebase/AddDoc.vue"
            ),
        Order: () =>
            import(
                /* webpackChunkName: "Order" */ "../components/firebase/Order.vue"
            ),
        LiveDatabase: () =>
            import(
                /* webpackChunkName: "LiveDatabase" */ "../components/firebase/LiveDatabase.vue"
            ),
        FirebaseV9: () =>
            import(
                /* webpackChunkName: "FirebaseV9" */ "../components/firebase/FirebaseV9.vue"
            ),
        InstallV9: () =>
            import(
                /* webpackChunkName: "InstallV9" */ "../components/firebase/InstallV9.vue"
            ),
        CollectionsV9: () =>
            import(
                /* webpackChunkName: "CollectionsV9" */ "../components/firebase/CollectionsV9.vue"
            ),
        AddDocV9: () =>
            import(
                /* webpackChunkName: "AddDocV9" */ "../components/firebase/AddDocV9.vue"
            ),
        DeletingV9: () =>
            import(
                /* webpackChunkName: "DeletingV9" */ "../components/firebase/DeletingV9.vue"
            ),
        UpdateDocV9: () =>
            import(
                /* webpackChunkName: "UpdateDocV9" */ "../components/firebase/UpdateDocV9.vue"
            ),
        AutoV9: () =>
            import(
                /* webpackChunkName: "AutoV9" */ "../components/firebase/AutoV9.vue"
            ),
        SignupSigninLogoutV9: () =>
            import(
                /* webpackChunkName: "SignupSigninLogoutV9" */ "../components/firebase/SignupSigninLogoutV9.vue"
            ),
    },
};
</script>

<style>
</style>