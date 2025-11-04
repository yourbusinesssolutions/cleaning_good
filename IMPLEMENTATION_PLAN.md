# Website Improvements - Implementation Plan

## Client Requirements Summary

**Logo Color:** #1C99DE
**Shopping Cart Type:** Cart + checkout as order submission (NO payment processing)
**Blog:** Ignored for now

---

## Changes Required

### 1. Quick Fixes
- ✅ Remove "difficult stains test" section
- ✅ Remove test vacancy (Django Admin)
- ✅ Make footer more subtle
- ✅ Delete unused files

### 2. Product Navigation
- ✅ Create product detail pages
- ✅ Enable click-through from product list
- ✅ Add proper routing

### 3. Shopping Cart (No Payment)
**Backend:**
- ✅ Create Cart & CartItem models
- ✅ Create Order & OrderItem models
- ✅ API endpoints for cart operations
- ✅ API endpoint for order submission

**Frontend:**
- ✅ Cart context for state management
- ✅ Cart page component
- ✅ Checkout page (submits order, no payment)
- ✅ Update Navbar with cart icon
- ✅ Add "Add to Cart" to products

### 4. Color Scheme Update
- ✅ Update primary color: #209BDD → #1C99DE
- ✅ Apply across all components

---

## Implementation Order

### Phase 1: Quick Fixes (2-3 hours)
1. Remove "difficult stains test" content
2. Remove test vacancy
3. Make footer subtle
4. Delete unused files

### Phase 2: Product Details (3-4 hours)
1. Create ProductDetail component
2. Add route
3. Update product cards

### Phase 3: Shopping Cart Backend (10 hours)
1. Create models (Cart, CartItem, Order, OrderItem)
2. Create serializers and viewsets
3. Build API endpoints
4. Update admin panel
5. Run migrations

### Phase 4: Shopping Cart Frontend (12 hours)
1. Create CartContext
2. Update Navbar with cart icon
3. Create Cart page
4. Create Checkout page
5. Update product pages with "Add to Cart"
6. Add cart routes

### Phase 5: Color Updates (4-5 hours)
1. Update tailwind.config.js
2. Update all components with new colors
3. Test consistency

---

## Total Estimated Time: ~35 hours
- Frontend: 23 hours
- Backend: 10 hours
- Testing: 2 hours

---

## Shopping Cart Flow

**User Journey:**
1. Browse products → Click "Meer informatie" → View product detail
2. Click "Add to Cart" → Item added to cart (with quantity)
3. Click cart icon in navbar → View cart page
4. Update quantities or remove items
5. Click "Proceed to Checkout"
6. Fill in customer info (name, email, phone, company, notes)
7. Review order summary
8. Click "Place Order" → Order submitted to backend
9. See confirmation message

**Backend Processing:**
- Order stored in database with all items
- Admin can view and process orders in Django Admin
- No payment processing
- Optional: Send email confirmation

---

## Technical Notes

### Cart Implementation:
- Session-based cart (no authentication required)
- Cart persists in backend via session key
- Items can be added, updated, removed
- Cart totals calculated dynamically

### Order Submission:
- Order created from cart items
- Cart cleared after order placement
- Order includes customer info + all cart items
- Backend marks as "pending" for processing

### Color Scheme:
- Primary: #1C99DE (blue)
- Update all blue-* utilities in Tailwind
- Maintain WCAG accessibility standards

---

## Files to Create

### Backend:
- Updated: `products/models.py` (Cart, CartItem, Order, OrderItem)
- New: `products/serializers.py` (cart/order serializers)
- New: `products/views.py` (cart/order viewsets)
- Updated: `core/urls.py` (cart/order routes)

### Frontend:
- New: `src/context/CartContext.js`
- New: `src/pages/ProductDetail.js`
- New: `src/pages/Cart.js`
- New: `src/pages/Checkout.js`
- New: `src/pages/OrderConfirmation.js`
- New: `src/services/cartService.js`
- New: `src/services/orderService.js`
- Updated: `src/components/layout/Navbar.js`
- Updated: `src/pages/Products.js`
- Updated: `src/App.js`
- Updated: `tailwind.config.js`

### Files to Delete:
- `src/BMSLifestyleWebsite.js`
- `src/HeroSliders.js`

---

## Testing Checklist

- [ ] Product detail pages load correctly
- [ ] Add to cart functionality works
- [ ] Cart page displays items correctly
- [ ] Update quantity works
- [ ] Remove item works
- [ ] Checkout form validates
- [ ] Order submission succeeds
- [ ] Cart clears after order
- [ ] Navbar cart badge updates
- [ ] Footer is more subtle
- [ ] New color scheme applied consistently
- [ ] Responsive on mobile/tablet
- [ ] No console errors

---

## Backend Admin Panel

**Access:** `/admin-7f8e9a2b-4c5d-6e7f-8g9h-0i1j2k3l4m5n/`

**Tasks:**
- Remove test vacancy (HR → Vacancies → delete/deactivate)
- Manage orders (Products → Orders)
- View cart data (Products → Carts)

---

**Status:** Ready to implement
**Start Date:** 2025-11-04
**Estimated Completion:** 4-5 weeks
