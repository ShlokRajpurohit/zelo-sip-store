import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import { User, Package, CreditCard, MapPin, Crown, Calendar, Settings, LogOut, Eye } from "lucide-react";
import { useState } from "react";

const Account = () => {
  const [activeTab, setActiveTab] = useState('profile');
  
  // Mock user data
  const user = {
    name: 'Priya Sharma',
    email: 'priya.sharma@gmail.com',
    phone: '+91 98765 43210',
    zeloClub: true,
    zeloSIP: true,
    memberSince: '2023-01-15'
  };

  const orders = [
    {
      id: 'ORD-001',
      date: '2024-01-15',
      items: ['Classic Peanut Protein Bar x2', 'Mixed Berry Granola Bar x1'],
      total: 897,
      status: 'Delivered'
    },
    {
      id: 'ORD-002',
      date: '2024-01-10',
      items: ['Vanilla Protein Mix x1'],
      total: 809,
      status: 'Processing'
    }
  ];

  const TabButton = ({ id, label, icon: Icon }: { id: string, label: string, icon: any }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center gap-3 p-3 rounded-lg text-left w-full transition-colors ${
        activeTab === id 
          ? 'bg-accent text-accent-foreground' 
          : 'text-muted-foreground hover:bg-accent/50 hover:text-accent-foreground'
      }`}
    >
      <Icon className="w-5 h-5" />
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent-light/20 to-primary/10 py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="heading-lg text-primary mb-2">My Account</h1>
              <p className="text-muted-foreground">Welcome back, {user.name}!</p>
            </div>
            <div className="flex gap-2">
              {user.zeloClub && (
                <Badge className="bg-accent text-accent-foreground">
                  <Crown className="w-3 h-3 mr-1" />
                  Zelo Club
                </Badge>
              )}
              {user.zeloSIP && (
                <Badge className="bg-primary text-primary-foreground">
                  <Calendar className="w-3 h-3 mr-1" />
                  Zelo SIP
                </Badge>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Account Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <Card>
                <CardContent className="p-4">
                  <nav className="space-y-2">
                    <TabButton id="profile" label="Profile" icon={User} />
                    <TabButton id="orders" label="Orders" icon={Package} />
                    <TabButton id="membership" label="Membership" icon={Crown} />
                    <TabButton id="addresses" label="Addresses" icon={MapPin} />
                    <TabButton id="payment" label="Payment Methods" icon={CreditCard} />
                    <TabButton id="settings" label="Settings" icon={Settings} />
                  </nav>
                  <div className="border-t border-border mt-4 pt-4">
                    <Button variant="ghost" className="w-full justify-start text-destructive hover:text-destructive">
                      <LogOut className="w-5 h-5 mr-3" />
                      Logout
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              
              {/* Profile Tab */}
              {activeTab === 'profile' && (
                <Card>
                  <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-primary">Full Name</label>
                        <Input defaultValue={user.name} />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-primary">Email</label>
                        <Input type="email" defaultValue={user.email} />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-primary">Phone</label>
                        <Input defaultValue={user.phone} />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-primary">Member Since</label>
                        <Input disabled value={new Date(user.memberSince).toLocaleDateString()} />
                      </div>
                    </div>
                    <Button>Update Profile</Button>
                  </CardContent>
                </Card>
              )}

              {/* Orders Tab */}
              {activeTab === 'orders' && (
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Order History</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {orders.map((order) => (
                          <div key={order.id} className="border border-border rounded-lg p-4">
                            <div className="flex justify-between items-start mb-3">
                              <div>
                                <h3 className="font-semibold text-primary">Order {order.id}</h3>
                                <p className="text-sm text-muted-foreground">{order.date}</p>
                              </div>
                              <Badge variant={order.status === 'Delivered' ? 'default' : 'secondary'}>
                                {order.status}
                              </Badge>
                            </div>
                            <div className="space-y-1 mb-3">
                              {order.items.map((item, index) => (
                                <p key={index} className="text-sm text-muted-foreground">{item}</p>
                              ))}
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="font-semibold text-primary">₹{order.total}</span>
                              <Button variant="outline" size="sm">
                                <Eye className="w-4 h-4 mr-2" />
                                View Details
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Membership Tab */}
              {activeTab === 'membership' && (
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Membership Status</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      
                      {/* Zelo Club */}
                      <div className="border border-accent/30 rounded-lg p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <Crown className="w-6 h-6 text-accent" />
                            <h3 className="text-xl font-semibold text-primary">Zelo Club</h3>
                          </div>
                          <Badge className="bg-accent text-accent-foreground">Active</Badge>
                        </div>
                        <p className="text-muted-foreground mb-4">
                          Get 5% discount on all orders. Active until next purchase + 1 year.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="font-medium text-primary">Discount Rate</p>
                            <p className="text-muted-foreground">5% off all orders</p>
                          </div>
                          <div>
                            <p className="font-medium text-primary">Next Renewal</p>
                            <p className="text-muted-foreground">Dec 15, 2024</p>
                          </div>
                        </div>
                      </div>

                      {/* Zelo SIP */}
                      <div className="border border-primary/30 rounded-lg p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <Calendar className="w-6 h-6 text-primary" />
                            <h3 className="text-xl font-semibold text-primary">Zelo SIP</h3>
                          </div>
                          <Badge className="bg-primary text-primary-foreground">Active</Badge>
                        </div>
                        <p className="text-muted-foreground mb-4">
                          Monthly subscription with additional 5% discount. Next delivery on Feb 15.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                          <div>
                            <p className="font-medium text-primary">Monthly Amount</p>
                            <p className="text-muted-foreground">₹599</p>
                          </div>
                          <div>
                            <p className="font-medium text-primary">Next Delivery</p>
                            <p className="text-muted-foreground">Feb 15, 2024</p>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <Button variant="outline" size="sm">Modify Subscription</Button>
                          <Button variant="outline" size="sm">Pause Subscription</Button>
                        </div>
                      </div>

                      {/* Combined Savings */}
                      <div className="bg-gradient-to-r from-accent-light/10 to-primary/10 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-primary mb-2">Your Total Savings</h3>
                        <div className="text-3xl font-bold text-primary mb-2">10% OFF</div>
                        <p className="text-muted-foreground">
                          Combination of Zelo Club (5%) + Zelo SIP (5%) discounts
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Other tabs would be implemented similarly */}
              {activeTab === 'addresses' && (
                <Card>
                  <CardHeader>
                    <CardTitle>Saved Addresses</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">No saved addresses yet.</p>
                    <Button className="mt-4">Add New Address</Button>
                  </CardContent>
                </Card>
              )}

              {activeTab === 'payment' && (
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Methods</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">No saved payment methods.</p>
                    <Button className="mt-4">Add Payment Method</Button>
                  </CardContent>
                </Card>
              )}

              {activeTab === 'settings' && (
                <Card>
                  <CardHeader>
                    <CardTitle>Account Settings</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium text-primary">Email Notifications</h3>
                          <p className="text-sm text-muted-foreground">Receive order updates and promotions</p>
                        </div>
                        <Button variant="outline" size="sm">Configure</Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium text-primary">SMS Notifications</h3>
                          <p className="text-sm text-muted-foreground">Receive delivery updates via SMS</p>
                        </div>
                        <Button variant="outline" size="sm">Configure</Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium text-primary">Change Password</h3>
                          <p className="text-sm text-muted-foreground">Update your account password</p>
                        </div>
                        <Button variant="outline" size="sm">Change</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Account;
