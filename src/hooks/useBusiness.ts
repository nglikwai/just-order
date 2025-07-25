'use client';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import type { BusinessData } from '@/types';

const fetchBusiness = async (): Promise<BusinessData> => {
  const response = await fetch('/api/business');

  if (!response.ok) {
    throw new Error('Failed to fetch business data');
  }

  return response.json();
};

const updateBusiness = async (
  updates: Partial<BusinessData>
): Promise<BusinessData> => {
  const response = await fetch('/api/business', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updates),
  });

  if (!response.ok) {
    throw new Error('Failed to update business data');
  }

  return response.json();
};

export function useBusiness() {
  return useQuery({
    queryKey: ['business'],
    queryFn: fetchBusiness,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 2,
  });
}

export function useUpdateBusiness() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateBusiness,
    onSuccess: data => {
      queryClient.setQueryData(['business'], data);
    },
    onError: error => {
      console.error('Error updating business:', error);
    },
  });
}
