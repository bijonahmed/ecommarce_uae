export { default as Appliances } from '../..\\components\\Appliances.vue'
export { default as BestPrice } from '../..\\components\\BestPrice.vue'
export { default as BigSavingGrocery } from '../..\\components\\BigSavingGrocery.vue'
export { default as BrandiOfficialStore } from '../..\\components\\BrandiOfficialStore.vue'
export { default as CategoryMultipleProduct } from '../..\\components\\CategoryMultipleProduct.vue'
export { default as CategoryPart } from '../..\\components\\CategoryPart.vue'
export { default as CategoryProductFilter } from '../..\\components\\CategoryProductFilter.vue'
export { default as CategoryProductFilterGrid } from '../..\\components\\CategoryProductFilterGrid.vue'
export { default as CategoryRecentView } from '../..\\components\\CategoryRecentView.vue'
export { default as CommonMiniTabNavbar } from '../..\\components\\Common_MiniTabNavbar.vue'
export { default as CommonMobileSearchProduct } from '../..\\components\\Common_MobileSearchProduct.vue'
export { default as CommonMobileSidebar } from '../..\\components\\Common_MobileSidebar.vue'
export { default as DelasForYour } from '../..\\components\\DelasForYour.vue'
export { default as DesktopViewOption } from '../..\\components\\DesktopViewOption.vue'
export { default as ExtraDiscount } from '../..\\components\\ExtraDiscount.vue'
export { default as FlashSaleFilter } from '../..\\components\\FlashSaleFilter.vue'
export { default as FlashSelling } from '../..\\components\\FlashSelling.vue'
export { default as Footer } from '../..\\components\\Footer.vue'
export { default as HealthandBeauty } from '../..\\components\\HealthandBeauty.vue'
export { default as LargeAppliance } from '../..\\components\\LargeAppliance.vue'
export { default as LimitedStock } from '../..\\components\\LimitedStock.vue'
export { default as LimitedStokDetails } from '../..\\components\\LimitedStokDetails.vue'
export { default as LoginPopup } from '../..\\components\\LoginPopup.vue'
export { default as LogoAndPayment } from '../..\\components\\LogoAndPayment.vue'
export { default as MoreCollection } from '../..\\components\\MoreCollection.vue'
export { default as Navbar } from '../..\\components\\Navbar.vue'
export { default as NavSlider } from '../..\\components\\NavSlider.vue'
export { default as OfficalStore } from '../..\\components\\OfficalStore.vue'
export { default as OfficialStoreDeals } from '../..\\components\\OfficialStoreDeals.vue'
export { default as OfficialStoreProductList } from '../..\\components\\OfficialStoreProductList.vue'
export { default as PhoneDeals } from '../..\\components\\PhoneDeals.vue'
export { default as PhoneSuperSales } from '../..\\components\\PhoneSuperSales.vue'
export { default as PhoneTables } from '../..\\components\\PhoneTables.vue'
export { default as ProductListFilterGrid } from '../..\\components\\ProductListFilterGrid.vue'
export { default as ProductListFilterList } from '../..\\components\\ProductListFilterList.vue'
export { default as RecentView } from '../..\\components\\RecentView.vue'
export { default as ShopFromOurCollection } from '../..\\components\\ShopFromOurCollection.vue'
export { default as TopAppliancesDeals } from '../..\\components\\TopAppliancesDeals.vue'
export { default as TopBannarDesktopView } from '../..\\components\\TopBannarDesktopView.vue'
export { default as TopDeals } from '../..\\components\\TopDeals.vue'
export { default as TopPower } from '../..\\components\\TopPower.vue'
export { default as TopSellingItem } from '../..\\components\\TopSellingItem.vue'
export { default as TopSellingItemBackup } from '../..\\components\\TopSellingItemBackup.vue'
export { default as Tutorial } from '../..\\components\\Tutorial.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
