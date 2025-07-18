import './App.css'

function App() {
  return (
    <div>
 <nav className='px-6 py-4 bg-gray-50'>
  <div className="flex items-center">
    <a href="/" className='text-2xl font-bold text-black mr-auto'>Jadoo</a>
    
    <div className="flex items-center space-x-8">
      <a href="#destinations" className="text-black hover:text-indigo-600 transition">Destinations</a>
      <a href="#hotels" className="text-black hover:text-indigo-600 transition">Hotels</a>
      <a href="#flights" className="text-black hover:text-indigo-600 transition">Flights</a>
      <a href="#bookings" className="text-black hover:text-indigo-600 transition">Bookings</a>
      <a href="#login" className="text-gray-600 hover:text-indigo-600 transition">Login</a>
      <a href="#signup" className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
        Sign up
      </a>
    </div>
  </div>
</nav>
   <section className="relative flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-12 lg:px-24 py-16 bg-gray-50">
     <div className="md:w-1/2 space-y-6 mb-12 md:mb-0">
        <h2 className='text-red-400 font-bold'>BEST DESTINATIONS AROUND THE WORLD</h2>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
          Travel, enjoy 
          and live a new and full life
        </h1>
        <p className="text-lg text-gray-600">
          Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
        </p>
        <button className="px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-indigo-700 transition">
          Find out more
        </button>
      </div>

      <div className="md:w-1/2 flex justify-center md:justify-end">
        <img 
          src="/Traveller 1.png" 
          alt="Travel destination"
          className="w-full max-w-md lg:max-w-lg object-cover"
        />
      </div>
    </section>  
    <section>
      <div className="py-16 px-6 bg-gray-50">
  <div className="max-w-6xl mx-auto">
    <p className='flex justify-center text-purple-500'>CATEGORY</p>
    <h2 className="text-3xl font-bold text-center mb-12 text-purple-500">We Offer Best Services</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition">
        <img 
          src="/satellite-dish.png" 
          alt="Flight Booking" 
          className="w-16 h-16 mb-4 object-contain"
        />
        <h3 className="text-xl font-semibold mb-2">Calculated Weather</h3>
        <p className="text-gray-600">Built Wicket longer admire do barton vanity itself do in it.</p>
      </div>

      <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition">
        <img 
          src="/plane.png" 
          alt="Hotel Reservation" 
          className="w-16 h-16 mb-4 object-contain"
        />
        <h3 className="text-xl font-semibold mb-2">Best Flights</h3>
        <p className="text-gray-600">Engrossed listening. Park gate sell they west hard for the.</p>
      </div>

      <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition">
        <img 
          src="/mic.png" 
          alt="Tour Packages" 
          className="w-16 h-16 mb-4 object-contain"
        />
        <h3 className="text-xl font-semibold mb-2">Local Events</h3>
        <p className="text-gray-600">Barton vanity itself do in it. Preferd to men it engrossed listening.</p>
      </div>

      <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition">
        <img 
          src="/power-supply 1.png" 
          alt="Tour Packages" 
          className="w-16 h-16 mb-4 object-contain"
        />
        <h3 className="text-xl font-semibold mb-2">Customization</h3>
        <p className="text-gray-600">We deliver outsourced aviation srvices for military customers.</p>
      </div>
    </div>
  </div>
</div>
</section>
<section>
  <div className="relative mt-12 pb-16">
  <p className="text-center text-purple-400 font-semibold mb-8">Top Selling</p>
  
  <h2 className="text-3xl font-bold text-center mb-12">Top Destinations</h2>
  
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto">
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      <div className='max-h-64 overflow-hidden'>
      <img 
        src="/Italy.png" 
        alt="Paris"
        className="w-full h-auto object-cover"
      />
      </div>
      <div className="p-4">
        <div className='flex justify-between mb-3'>
        <p className="text-gray-600">Rome, Italy</p>
        <p className="text-gray-600">$5.42k</p>
        </div>
        <div className='flex'>
          <img src="/Vector.png" alt="" className='mr-3'/>
          <p className="text-gray-600">12 Days Trip</p>        
        </div>
      </div>
    </div>

    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      <div className='max-h-64 overflow-hidden'>
      <img 
        src="/Rectangle 14.jpg" 
        alt="Paris"
        className="w-full h-auto object-cover"
      />
      </div>
      <div className="p-4">
        <div className='flex justify-between mb-3'>
        <p className="text-gray-600">London, UK</p>
        <p className="text-gray-600">$4.2k</p>
        </div>
        <div className='flex'>
          <img src="/Vector.png" alt="" className='mr-3'/>
          <p className="text-gray-600">12 Days Trip</p>        
        </div>
      </div>
    </div>

     <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      <div className='max-h-64 overflow-hidden'>
      <img 
        src="/FullEurope.png" 
        alt="Paris"
        className="w-full h-auto object-cover"
      />
      </div>
      <div className="p-4">
        <div className='flex justify-between mb-3'>
        <p className="text-gray-600">Full Europe</p>
        <p className="text-gray-600">$15k</p>
        </div>
        <div className='flex'>
          <img src="/Vector.png" alt="" className='mr-3'/>
          <p className="text-gray-600">29 Days Trip</p>        
        </div>
      </div>
    </div>
  </div>
</div>
</section>
<section className="py-16 px-6 bg-white">
  <div className="max-w-6xl mx-auto">
    <p className="font-bold">Easy and Fast</p>
    <h2 className="text-3xl font-bold text-center mb-4">Book Your Next Trip in 3 Easy Steps</h2>
    
    <div className="flex flex-col lg:flex-row gap-12 mt-12">
      <div className="lg:w-1/2 space-y-8">
        <div className="flex gap-6">
          <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-600 font-bold text-xl">1</span>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Choose Destination</h3>
            <p className="text-gray-600">Select your dream location from our worldwide destinations.</p>
          </div>
        </div>

        <div className="flex gap-6">
          <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-600 font-bold text-xl">2</span>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Make Payment</h3>
            <p className="text-gray-600">Secure booking with our encrypted payment system.</p>
          </div>
        </div>

        <div className="flex gap-6">
          <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-600 font-bold text-xl">3</span>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Reach Airport</h3>
            <p className="text-gray-600">Arrive at the airport on your selected date and enjoy your trip!</p>
          </div>
        </div>
      </div>

      <div className="lg:w-1/2 flex justify-center">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-md">
          <div className="relative h-64">
            <img
              src="/Rectangle 14.jpg"
              alt="Santorini, Greece"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <h3 className="text-xl font-bold text-white">Santorini, Greece</h3>
              <p className="text-blue-200">7 Days Tour</p>
            </div>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-gray-500">Departure</p>
                <p className="font-medium">15 Nov 2023</p>
              </div>
              <div>
                <p className="text-gray-500">Price</p>
                <p className="font-medium text-blue-600">$1,200/person</p>
              </div>
            </div>
            <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition">
              Book This Trip
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="py-16 px-6 bg-gray-50">
  <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
    {/* Left Side - Big Text */}
    <div className="lg:w-1/2">
      <p className="font-semibold">TESTIMONIALS</p>
      <h2 className="text-4xl md:text-5xl font-bold leading-tight">
        What People Say<br />
        <span className="text-blue-600">About Us</span>
      </h2>
      <p className="text-xl text-gray-600 mt-6">
        Thousands of satisfied travelers share their experiences from around the world.
      </p>
    </div>

    <div className="lg:w-1/2 w-full">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-lg">
        {/* Reviewer Info */}
        <div className="flex items-center mb-6">
          <img 
            src="/user-avatar.jpg" 
            alt="Sarah Johnson" 
            className="w-16 h-16 rounded-full object-cover mr-4"
          />
          <div>
            <h4 className="text-xl font-semibold">Sarah Johnson</h4>
            <p className="text-gray-500">Travel Enthusiast</p>
          </div>
        </div>
        
        {/* Review Text */}
        <div className="pl-2">
          <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
          <blockquote className="text-gray-700 italic text-lg">
            "Booking through Jadoo was the best decision we made for our Greek island hopping adventure. 
            Their team handled everything perfectly - from flights to amazing boutique hotels. 
            We'll definitely use them again for our next trip!"
          </blockquote>
          <p className="text-gray-500 mt-4">Visited Santorini & Mykonos • June 2023</p>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="py-12 px-6">
  <div className="flex flex-col items-center text-center mx-auto">
    <h1 className="text-2xl md:text-4xl text-gray-700 mb-8 font-medium">
      Subscribe to get information, latest news and other<br className="hidden md:block" /> interesting offers about Jadoo
    </h1>
    <div className="flex flex-row gap-4 w-full max-w-md">
      <input 
        type="email" 
        placeholder="Your email" 
        className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
      />
      <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg px-6 py-3">
        Subscribe
      </button>
    </div>
  </div>
</section>
<footer className="bg-gray-50 text-black py-12 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
    <div>
      <h3 className="text-2xl font-bold mb-4">Jadoo</h3>
      <p className="text-black mb-4">
        Book your trip in minutes, get full control for much longer.
      </p>     
    </div>

    <div>
      <h4 className="text-lg font-semibold mb-4">Company</h4>
      <ul className="space-y-2">
        <li><a href="#" className="text-gray-400 hover:text-white transition">About</a></li>
        <li><a href="#" className="text-gray-400 hover:text-white transition">Careers</a></li>
        <li><a href="#" className="text-gray-400 hover:text-white transition">Mobile</a></li>
        <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
      </ul>
    </div>

    <div>
      <h4 className="text-lg font-semibold mb-4">Contact</h4>
      <ul className="space-y-2">
        <li className="text-gray-400">help@jadoo.com</li>
        <li className="text-gray-400">+123 456 7890</li>
        <li className="text-gray-400">
          123 Travel Street<br />
          Adventure City, 10101
        </li>
      </ul>
    </div>

    <div>
      <h4 className="text-lg font-semibold mb-4">More</h4>
      <ul className="space-y-2">
        <li><a href="#" className="text-gray-400 hover:text-white transition">Airline Fees</a></li>
        <li><a href="#" className="text-gray-400 hover:text-white transition">Tips</a></li>
        <li><a href="#" className="text-gray-400 hover:text-white transition">Quarantine Rules</a></li>
        <li><a href="#" className="text-gray-400 hover:text-white transition">Badges</a></li>
      </ul>
    </div>
  </div>

  <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-800 text-center text-gray-400">
    <p>© {new Date().getFullYear()} Jadoo. All rights reserved.</p>
  </div>
</footer>
   </div>
  )
}

export default App
