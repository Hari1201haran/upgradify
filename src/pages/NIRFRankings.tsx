
import React, { useState } from 'react';
import { useData, NIRFRanking } from '@/contexts/DataContext';
import MainLayout from '@/components/layout/MainLayout';
import GlassCard from '@/components/ui/GlassCard';
import PageTransition from '@/components/layout/PageTransition';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Trophy, MapPin, School, ListOrdered } from 'lucide-react';
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";

const NIRFRankings = () => {
  const { nirfRankings } = useData();
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  
  const categories = Array.from(new Set(nirfRankings.map(ranking => ranking.category)));
  
  const filteredRankings = nirfRankings.filter(ranking => {
    const matchesSearch = ranking.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ranking.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ranking.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = categoryFilter ? ranking.category === categoryFilter : true;
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <MainLayout>
      <PageTransition>
        <div className="space-y-8">
          <section className="space-y-4">
            <div>
              <h1 className="text-3xl font-bold">NIRF Rankings</h1>
              <p className="text-muted-foreground mt-1">
                Explore top ranked institutions in Chennai according to National Institutional Ranking Framework
              </p>
            </div>
            
            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                <Input
                  placeholder="Search by institution name, category or location..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="flex gap-2 flex-wrap">
                <Button 
                  variant={categoryFilter === null ? "default" : "outline"}
                  onClick={() => setCategoryFilter(null)}
                >
                  All Categories
                </Button>
                {categories.map(category => (
                  <Button 
                    key={category}
                    variant={categoryFilter === category ? "default" : "outline"}
                    onClick={() => setCategoryFilter(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </section>
          
          {/* Rankings Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <GlassCard className="p-4 flex items-center gap-4 scale-in-animation">
              <div className="p-3 bg-yellow-100 rounded-lg">
                <Trophy className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Top Ranked Institute</p>
                <p className="font-semibold">{nirfRankings[0]?.name || "Not available"}</p>
              </div>
            </GlassCard>
            
            <GlassCard className="p-4 flex items-center gap-4 scale-in-animation">
              <div className="p-3 bg-indigo-100 rounded-lg">
                <School className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Institutions</p>
                <p className="font-semibold">{nirfRankings.length}</p>
              </div>
            </GlassCard>
            
            <GlassCard className="p-4 flex items-center gap-4 scale-in-animation">
              <div className="p-3 bg-green-100 rounded-lg">
                <ListOrdered className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Categories</p>
                <p className="font-semibold">{categories.length}</p>
              </div>
            </GlassCard>
          </div>
          
          {/* Rankings Table */}
          <GlassCard className="overflow-hidden">
            <Table>
              <TableCaption>NIRF Rankings for Educational Institutions in Chennai</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">Rank</TableHead>
                  <TableHead>Institution Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead className="text-right">NIRF Score</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredRankings.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-8">
                      <div className="flex flex-col items-center justify-center">
                        <School className="h-12 w-12 text-muted-foreground opacity-30" />
                        <h3 className="mt-4 text-lg font-medium">No institutions found</h3>
                        <p className="text-muted-foreground">
                          Try adjusting your search or filters
                        </p>
                      </div>
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredRankings
                    .sort((a, b) => a.rank - b.rank)
                    .map((ranking) => (
                      <TableRow key={ranking.id} className="cursor-pointer hover:bg-muted/50">
                        <TableCell className="font-medium">
                          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary">
                            {ranking.rank}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium">{ranking.name}</div>
                            <div className="text-sm text-muted-foreground line-clamp-1">
                              {ranking.description}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700">
                            {ranking.category}
                          </span>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
                            <span>{ranking.location}</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right font-medium">
                          {ranking.score.toFixed(1)}
                        </TableCell>
                      </TableRow>
                    ))
                )}
              </TableBody>
            </Table>
          </GlassCard>
          
          {/* Additional Information */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex gap-3">
              <div className="p-2 bg-blue-100 rounded-full h-fit">
                <School className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-blue-900">About NIRF Rankings</h3>
                <p className="text-sm text-blue-700 mt-1">
                  The National Institutional Ranking Framework (NIRF) was launched by the Ministry of Education, 
                  Government of India. It outlines a methodology to rank institutions across the country based on 
                  parameters like Teaching, Learning & Resources, Research & Professional Practice, Graduation 
                  Outcomes, Outreach & Inclusivity, and Perception.
                </p>
              </div>
            </div>
          </div>
        </div>
      </PageTransition>
    </MainLayout>
  );
};

export default NIRFRankings;
