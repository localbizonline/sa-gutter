@@ .. @@
 import ServicePage from './components/ServicePage';
 import Footer from './components/Footer';
 import ScrollToTop from './components/ScrollToTop';
+import MobileActions from './components/MobileActions';
 
 function App() {
   return (
@@ .. @@
           <Route path="/services/:serviceId" element={<ServicePage />} />
         </Routes>
         <Footer />
+        <MobileActions />
       </div>
     </Router>
   );
 }