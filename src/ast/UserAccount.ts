// @ts-ignore
/* eslint-disable */
import request from '@/utils/request';

/** get 调整单-基本信息-查询(单个) GET /warehouse-transportation-web/inventory/adjust-order/base/get/${param0} */
export function GETwarehouseTransportationWebInventoryAdjustOrderBaseGet$adjustOrderId(
  params: {
    // path
    /** adjustOrderId */
    adjustOrderId: number;
  },
  options?: { [key: string]: any },
) {
  const { adjustOrderId: param0, ...queryParams } = params;
  return request<API.ResponseDataAdjustOrderDTO>(
    `/warehouse-transportation-web/inventory/adjust-order/base/get/${param0}`,
    {
      method: 'GET',
      params: { ...queryParams },
      ...(options || {}),
    },
  );
}

/** changeWarehouse 调整单-更换仓库 PUT /warehouse-transportation-web/inventory/adjust-order/change-warehouse */
export function PUTwarehouseTransportationWebInventoryAdjustOrderChangeWarehouse(
  body: API.AdjustOrderChangeWarehouseCmd,
  options?: { [key: string]: any },
) {
  return request<API.ResponseDataboolean>(
    '/warehouse-transportation-web/inventory/adjust-order/change-warehouse',
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** create 调整单-创建 POST /warehouse-transportation-web/inventory/adjust-order/create */
export function POSTwarehouseTransportationWebInventoryAdjustOrderCreate(
  body: API.AdjustOrderCreateCmd,
  options?: { [key: string]: any },
) {
  return request<API.ResponseDatastring>(
    '/warehouse-transportation-web/inventory/adjust-order/create',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** delete 调整单-删除 DELETE /warehouse-transportation-web/inventory/adjust-order/delete/${param0} */
export function DELETEwarehouseTransportationWebInventoryAdjustOrderDelete$adjustOrderId(
  params: {
    // path
    /** adjustOrderId */
    adjustOrderId: number;
  },
  options?: { [key: string]: any },
) {
  const { adjustOrderId: param0, ...queryParams } = params;
  return request<API.ResponseDataboolean>(
    `/warehouse-transportation-web/inventory/adjust-order/delete/${param0}`,
    {
      method: 'DELETE',
      params: { ...queryParams },
      ...(options || {}),
    },
  );
}

/** addDetails 物料明细-新增 POST /warehouse-transportation-web/inventory/adjust-order/detail/add */
export function POSTwarehouseTransportationWebInventoryAdjustOrderDetailAdd(
  body: API.AdjustOrderDetailCreateCmd,
  options?: { [key: string]: any },
) {
  return request<API.ResponseDataboolean>(
    '/warehouse-transportation-web/inventory/adjust-order/detail/add',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** importAdjust 物料明细-导入(库存调整) POST /warehouse-transportation-web/inventory/adjust-order/detail/adjust-import */
export function POSTwarehouseTransportationWebInventoryAdjustOrderDetailAdjustImport(
  params: {
    // query
    /** adjustOrderId */
    adjustOrderId?: number;
  },
  body: string,
  options?: { [key: string]: any },
) {
  return request<API.ResponseDataboolean>(
    '/warehouse-transportation-web/inventory/adjust-order/detail/adjust-import',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      params: {
        ...params,
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** deleteDetails 物料明细-删除(批量) DELETE /warehouse-transportation-web/inventory/adjust-order/detail/delete */
export function DELETEwarehouseTransportationWebInventoryAdjustOrderDetailDelete(
  body: number[],
  options?: { [key: string]: any },
) {
  return request<API.ResponseDataboolean>(
    '/warehouse-transportation-web/inventory/adjust-order/detail/delete',
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** deleteAllDetails 物料明细-删除(所有) DELETE /warehouse-transportation-web/inventory/adjust-order/detail/delete-all/${param0} */
export function DELETEwarehouseTransportationWebInventoryAdjustOrderDetailDeleteAll$adjustOrderId(
  params: {
    // path
    /** adjustOrderId */
    adjustOrderId: number;
  },
  options?: { [key: string]: any },
) {
  const { adjustOrderId: param0, ...queryParams } = params;
  return request<API.ResponseDataboolean>(
    `/warehouse-transportation-web/inventory/adjust-order/detail/delete-all/${param0}`,
    {
      method: 'DELETE',
      params: { ...queryParams },
      ...(options || {}),
    },
  );
}

/** getDetailList 物料明细-列表查询 GET /warehouse-transportation-web/inventory/adjust-order/detail/list/${param0} */
export function GETwarehouseTransportationWebInventoryAdjustOrderDetailList$adjustOrderId(
  params: {
    // path
    /** adjustOrderId */
    adjustOrderId: number;
  },
  options?: { [key: string]: any },
) {
  const { adjustOrderId: param0, ...queryParams } = params;
  return request<API.ResponseDataListAdjustOrderDetailDTO>(
    `/warehouse-transportation-web/inventory/adjust-order/detail/list/${param0}`,
    {
      method: 'GET',
      params: { ...queryParams },
      ...(options || {}),
    },
  );
}

/** importProfitLoss 物料明细-导入(库存调整) POST /warehouse-transportation-web/inventory/adjust-order/detail/profit-loss-import */
export function POSTwarehouseTransportationWebInventoryAdjustOrderDetailProfitLossImport(
  params: {
    // query
    /** adjustOrderId */
    adjustOrderId?: number;
  },
  body: string,
  options?: { [key: string]: any },
) {
  return request<API.ResponseDataboolean>(
    '/warehouse-transportation-web/inventory/adjust-order/detail/profit-loss-import',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      params: {
        ...params,
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** downloadDetailTemplate 物料明细-下载模板 GET /warehouse-transportation-web/inventory/adjust-order/detail/template */
export function GETwarehouseTransportationWebInventoryAdjustOrderDetailTemplate(options?: {
  [key: string]: any;
}) {
  return request<any>('/warehouse-transportation-web/inventory/adjust-order/detail/template', {
    method: 'GET',
    ...(options || {}),
  });
}

/** findPage 调整单查询（分页) POST /warehouse-transportation-web/inventory/adjust-order/find-page */
export function POSTwarehouseTransportationWebInventoryAdjustOrderFindPage(
  body: API.AdjustOrderInfoQuery,
  options?: { [key: string]: any },
) {
  return request<API.ResponseDataPageResultAdjustOrderInfoDTO>(
    '/warehouse-transportation-web/inventory/adjust-order/find-page',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** submit 调整单-提交 PUT /warehouse-transportation-web/inventory/adjust-order/submit/${param0} */
export function PUTwarehouseTransportationWebInventoryAdjustOrderSubmit$adjustOrderId(
  params: {
    // path
    /** adjustOrderId */
    adjustOrderId: number;
  },
  options?: { [key: string]: any },
) {
  const { adjustOrderId: param0, ...queryParams } = params;
  return request<API.ResponseDataboolean>(
    `/warehouse-transportation-web/inventory/adjust-order/submit/${param0}`,
    {
      method: 'PUT',
      params: { ...queryParams },
      ...(options || {}),
    },
  );
}

/** update 调整单-保存 PUT /warehouse-transportation-web/inventory/adjust-order/update */
export function PUTwarehouseTransportationWebInventoryAdjustOrderUpdate(
  body: API.AdjustOrderUpdateCmd,
  options?: { [key: string]: any },
) {
  return request<API.ResponseDataboolean>(
    '/warehouse-transportation-web/inventory/adjust-order/update',
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}
