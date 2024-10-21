
import { Product } from '@/app/(shop)/shop/[category]/[subcategory]/[id]/page'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface ProductDescriptionProps {
  product: Product
}

export function ProductDescription({ product }: ProductDescriptionProps) {
  return (
    <div className="p-6 border-t">
      <Tabs defaultValue="description">
        <TabsList>
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="specifications">Specifications</TabsTrigger>
        </TabsList>
        <TabsContent value="description" className="mt-4">
          <p className="text-gray-700">{product.description}</p>
        </TabsContent>
        <TabsContent value="specifications" className="mt-4">
          <table className="w-full text-left">
            <tbody>
              {product.specifications && Object.entries(product.specifications).map(([key, value]) => (
                <tr key={key} className="border-b">
                  <td className="py-2 pr-4 font-medium">{key}</td>
                  <td className="py-2">{value.name}</td>
                  <td className="py-2">{value.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TabsContent>
      </Tabs>
    </div>
  )
}