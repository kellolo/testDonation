<template>
  <div>
    <DonationForm />
    <Spinner v-if="showSpinner"/>
  </div>
</template>

<script>
import DonationForm from '@/components/UI/DonationForm.vue'
import Spinner from '../components/UI/spinner.vue'
import Vuex from 'vuex'
export default {
  components: { DonationForm, Spinner },
  computed: {
    ...Vuex.mapState(['showSpinner'])
  }

}
</script>