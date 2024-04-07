/**
 * 商品表`wxpay_goods`的数据结构
 */
interface good{
    /**
     * 商品id
     */
    _id:string;
  
    /**
     * 单价
     */
    amount: number;
  
    /**
     * 库存
     */
    inventory:number;
    
    /**
     * 商品名称
     */
    name: string;
  
    /**
     * 商品描述
     */
    description: string;
  
    /**
     * 上架/下架状态
     * 1-上架 2-已下架
     */
    status: 1|2;
  }
  
  export default ol;
declare namespace ol {
    export { $ol$Collection as Collection };
    export namespace asserts {
        export { _ol_asserts$assert as assert };
    }
}